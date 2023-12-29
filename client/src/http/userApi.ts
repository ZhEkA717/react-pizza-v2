import { $authHost, $host } from './index';
import { jwtDecode } from 'jwt-decode';

export const registration = async (email: string, password: string) => {
    const {data} = await $host.post(
        'api/user/registration',
        {email, password, role: 'admin'}
    );
    localStorage.setItem('token', data);
    return jwtDecode(data);
}

export const login = async (email: string, password: string) => {
    const {data} = await $host.post(
        'api/user/login',
        {email, password, role: 'admin'}
    );
    localStorage.setItem('token', data);
    return data;
}

export const check = async () => {
    const { data } = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data);
    return data;
}