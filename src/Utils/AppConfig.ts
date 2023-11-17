class AppConfig {
    private apiKey = "wTmR0iYDHQ2uxZQlgIOKyLpQBX8tZj38";
    private locationsUrl = "https://dataservice.accuweather.com/locations/v1/cities/autocomplete";
    private currentConditionsUrl ="https://dataservice.accuweather.com/currentconditions/v1/";

    public getLocationsUrl(cityName: string): string {
        return `${this.locationsUrl}?q=${cityName}&apikey=${this.apiKey}`;
    }

    public getCurrentConditionsUrl(locationKey: string): string {
        return `${this.currentConditionsUrl}${locationKey}?apikey=${this.apiKey}&language=en-us&details=false`;
    }
}

const appConfig = new AppConfig();

export default appConfig;
