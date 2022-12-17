# Пример использования fetch в Node.js через прокси

Необходимо заполнить константы PROXY_HOST, PROXY_PORT, PROXY_USER и
PROXY_PASSWORD в файле constants.ts

После запуска скрипт делает get-запрос на адрес
https://api.db-ip.com/v2/free/self в ответе будет ваш ip и гео

Пример ответа:

```
{
  ipAddress: '193.178.133.109',
  continentCode: 'EU',
  continentName: 'Europe',
  countryCode: 'DE',
  countryName: 'Germany',
  stateProv: 'Hesse',
  city: 'Frankfurt am Main'
}
```

---

## Установка

```
npm install
```

## Запуск

```
npm start
```
