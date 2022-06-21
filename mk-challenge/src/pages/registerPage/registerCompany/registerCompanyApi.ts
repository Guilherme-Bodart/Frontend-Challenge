export function fetchRegisterCompany(company = {
    segment: true, type: '', cnpj: '', corporateName: '', phone: '',
    cep: '', address: '', number: '', complement: '', district: ''
}) {
    return new Promise<{ data: any }>((resolve) =>
        setTimeout(() => resolve({ data: company }), 700)
    )
}