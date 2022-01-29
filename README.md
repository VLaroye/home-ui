# home-ui

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Make a request to JEEDOM

- Add variables to a `.env.local` file (follow the .env template)
- In your component:

  ```ts
  setup() {
    const $http: any = inject('$http');
    onMounted(async () => {
      const response = await $http.get('/', {
        params: { type: 'cmd', id: 985 },
      });

      console.log(response);
    });
  },
  ```

  Where 'cmd' is the type of command you wanna execute (see [the Jeedom developer's documentation](https://doc.jeedom.com/fr_FR/core/4.1/api_http#Info%2FAction%20commande)) and 'id' is the id of the command you wanna execute
