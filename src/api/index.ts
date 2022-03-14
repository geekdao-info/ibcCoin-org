import axios from 'axios';
import { useRequest } from 'vue-request';

// 从 https://www.mintscan.io/cosmos 获取 atom 价格信息
export const getAtomPriceApi = () => {
    return axios.get('/backend/cosmostation/v1/market/price?id=uatom');
};

export function getAtomPrice() {
    const { data, run } = useRequest(getAtomPriceApi, {
        errorRetryCount: 5,
        onError: (error) => {
            console.log('(⊙︿⊙) something error', error);
        },
        onSuccess: () => {
            console.log('✿✿ヽ(°▽°)ノ✿ success', data);
        }
    });
    run();
}
