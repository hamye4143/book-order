//화폐 형식 변환기
export const currencyFormatter = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'krw',
});
