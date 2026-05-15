function fn() {
    var config = {
        baseUrl: 'https://serverest.dev'
    };

    karate.configure('ssl', true);
    karate.configure('retry', { count: 10, interval: 3000 });

    return config;
}