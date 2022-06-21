export function fetchRegister(user = { email: '', name: '', phone: '' }) {
    return new Promise<{ data: any }>((resolve) =>
        setTimeout(() => resolve({ data: user }), 700)
    )
}