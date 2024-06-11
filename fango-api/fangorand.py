import time

from algosdk import transaction
from utils import get_accounts, get_algod_client
import hashlib
import base64
import random



algod_client = get_algod_client()
accounts = get_accounts()
acct1 = accounts.pop()
acct2 = accounts.pop()
sp = algod_client.suggested_params()

def compile_program(client, source_code):
    compile_response = client.compile(source_code)
    return base64.b64decode(compile_response['result'])

def get_latest_block_hash():
    status = algod_client.status()
    latest_round = status['last-round']
    block = algod_client.block_info(latest_round)
    return block['block']['prev']

def generate_random_number_from_block_hash(block_hash):
    hash_bytes = hashlib.sha256(block_hash.encode('utf-8')).digest()
    return int.from_bytes(hash_bytes[:8], 'big')

def create_arc3():
    txn = transaction.AssetConfigTxn(
        sender=acct1.address,
        sp=sp,
        default_frozen=False,
        unit_name="fan",
        asset_name="fanGoLandAsset@arc3",
        manager=acct1.address,
        reserve=acct1.address,
        freeze=acct1.address,
        clawback=acct1.address,
        url='https://ipfs.algonode.xyz/ipfs/bafybeibk6xe3n5y7ou4rez36puag4vfuhr7pjbw4phco2onkeno3fm6joe/',
        total=1000,
        decimals=0,
    )

    stxn = txn.sign(acct1.private_key)
    txid = algod_client.send_transaction(stxn)
    results = transaction.wait_for_confirmation(algod_client, txid, 0)
    print(f"Wait for Explorer Indexing")
    time.sleep(7)
    print(f"Sent asset create transaction with txid: https://app.dappflow.org/explorer/transaction/{txid}")
    print(f"Result confirmed in round: {results['confirmed-round']}")

    created_asset = results["asset-index"]
    print(f"Asset ID created: {created_asset}")


def deploy():
    approval_program_source = open("./fango-api/vrf/approval.teal", "r").read()
    clear_program_source = open("./fango-api/vrf/clear.teal", "r").read()
    approval_program_compiled = compile_program(algod_client, approval_program_source)
    clear_program_compiled = compile_program(algod_client, clear_program_source)

    global_schema = transaction.StateSchema(num_uints=1, num_byte_slices=0)
    local_schema = transaction.StateSchema(num_uints=0, num_byte_slices=0)

    params = algod_client.suggested_params()
    txn = transaction.ApplicationCreateTxn(
        sender=acct1.address,
        sp=params,
        on_complete=transaction.OnComplete.NoOpOC.real,
        approval_program=approval_program_compiled,
        clear_program=clear_program_compiled,
        global_schema=global_schema,
        local_schema=local_schema,
    )

    signed_txn = txn.sign(acct1.private_key)
    txid = algod_client.send_transaction(signed_txn)
    print(f"Wait for Explorer Indexing")
    time.sleep(10)
    print(f"Deploy transaction with txid: https://app.dappflow.org/explorer/transaction/{txid}")

    transaction_response = transaction.wait_for_confirmation(algod_client, txid, 0)
    app_id = transaction_response['application-index']
    print(f"Deployed new app with app_id: {app_id}")

"""
시나리오는 50명중 5개 선정
10명이 참여 (10명별로 비율나누기)
연산은 Contract Level 진행 ++ python
"""
def random_value(app_id):
    block_hash = get_latest_block_hash()
    random_number = generate_random_number_from_block_hash(block_hash)

    random_number_bytes = random_number.to_bytes(8, 'big')
    print(random_number)
    params = algod_client.suggested_params()
    txn = transaction.ApplicationNoOpTxn(
        sender=acct1.address,
        sp=params,
        index=app_id,
        app_args=[random_number_bytes]
    )

    signed_txn = txn.sign(acct1.private_key)
    txid = algod_client.send_transaction(signed_txn)
    transaction.wait_for_confirmation(algod_client, txid, 0)
    app_info = algod_client.application_info(app_id)
    random_value = app_info['params']['global-state'][0]['value']['uint']
    print(f"Random value: {random_value}")
    print(f"Sent asset create transaction with txid: https://app.dappflow.org/explorer/transaction/{txid}")

def transfer(asset_id):
    optin_txn = transaction.AssetOptInTxn(
        sender=acct2.address, sp=sp, index=asset_id
    )
    signed_optin_txn = optin_txn.sign(acct2.private_key)
    txid = algod_client.send_transaction(signed_optin_txn)
    print(f"Sent opt in transaction with txid: {txid}")

    results = transaction.wait_for_confirmation(algod_client, txid, 0)
    print(f"Result confirmed in round: {results['confirmed-round']}")

    xfer_txn = transaction.AssetTransferTxn(
        sender=acct1.address,
        sp=sp,
        receiver=acct2.address,
        amt=1,
        index=asset_id,
    )
    signed_xfer_txn = xfer_txn.sign(acct1.private_key)
    txid = algod_client.send_transaction(signed_xfer_txn)
    print(f"Wait for Explorer Indexing")
    time.sleep(7)
    print(f"Random transaction with txid: {txid}")

    results = transaction.wait_for_confirmation(algod_client, txid, 0)
    print(f"Result confirmed in round: {results['confirmed-round']}")


def fisher_yates_shuffle(arr, seed):
    random.seed(seed)
    for i in range(len(arr) - 1, 0, -1):
        j = random.randint(0, i)
        arr[i], arr[j] = arr[j], arr[i]

    return arr

def raffle(seed_value):
    array = [i for i in range(1, 10000)]
    shuffled_array = fisher_yates_shuffle(array, seed_value)
    print(f"result: {shuffled_array[:20]}")

#1
# create_arc3()
#2
# deploy()
#3
# random_value(1073) ##Param is APP_ID
#4
raffle(11244696536753272400) ## Param is Random_value
