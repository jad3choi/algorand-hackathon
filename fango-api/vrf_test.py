from algosdk import account, mnemonic
from algosdk.v2client import algod
import base64

# Algorand 노드 연결 설정
algod_token = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
algod_address = "http://127.0.0.1:4001"
algod_client = algod.AlgodClient(algod_token, algod_address)

# 계정 생성 및 VRF 키 생성
private_key, address = account.generate_account()
print("Address: ", address)
print("Private key: ", private_key)
print("Mnemonic: ", mnemonic.from_private_key(private_key))

# VRF 키 생성 (계정 생성시 자동으로 포함됨)
vrf_private_key, vrf_public_key = account.generate_vrf_keys()
vrf_key = base64.b64encode(vrf_public_key).decode()
print("VRF Key: ", vrf_key)

# def get_latest_block_hash():
#     status = algod_client.status()
#     latest_round = status['lastRound']
#     block = algod_client.block_info(latest_round)
#     return block['block']['prev']
#
# # VRF를 사용하여 무작위 수 생성 함수
# def generate_vrf_random_number(vrf_private_key, block_hash):
#     vrf_proof = account.generate_vrf_proof(vrf_private_key, block_hash)
#     vrf_output = account.vrf_verify(vrf_key, block_hash, vrf_proof)
#     return int.from_bytes(vrf_output, byteorder='big')
#
# # 최신 블록 해시 가져오기
# block_hash = get_latest_block_hash()
# print("Block Hash: ", block_hash)
#
# # VRF를 사용하여 무작위 수 생성
# random_number = generate_vrf_random_number(vrf_private_key, block_hash)
# print("Random Number: ", random_number)
