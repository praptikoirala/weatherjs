class Weather{
   constructor(city){
      this.apiKey = "bf06878774e0d98c43ae80b82b262379";
      this.city = city;
   }

   async getWeather(){
      const resp = await fetch(`api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

      const respData = await resp.json;
      
      return respData;
   }
}