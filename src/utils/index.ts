export function getRandomId(len: number) {
    const chars = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjkllzxcvbnm1234567890!@#&';
    let id = '';

    for (let i = 0; i < len; i++) {
        const randomRum = Math.floor(Math.random() * chars.length);
        id += chars[randomRum];
    }

    return id;
}