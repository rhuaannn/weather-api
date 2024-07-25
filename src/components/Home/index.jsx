import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Container, Content, StyledH2 } from "./style";

const fetchWeather = async ({ queryKey }) => {
  const [, city] = queryKey;
  const response =
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb2eaad4e373a3973a235558fc93128e
`);
  return response.data;
};

export function Home() {
  const [city, setCity] = useState("Goiânia");

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["weather", city],
    queryFn: fetchWeather,
    enabled: false, // desabilita a execução automática da query
  });

  useEffect(() => {
    refetch()
  },[refetch])
  
  const handleSearch = () => {
    refetch(); // refaz a requisição quando o botão é clicado
  };

  const getTemperature = (weatherData) => {
    if (weatherData && weatherData.main) {
      return Math.round(weatherData.main.temp - 273.15); // Convertendo de Kelvin para Celsius
    }
    return "";
  };

  return (
    <Container>
      <Content>
        <input
          type="text"
          id="cityInput"
          placeholder="Digite sua cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Pesquisar</button>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error fetching data</p>}
        {data && (
          <div>
            <StyledH2>{data.name}</StyledH2>

            <StyledH2>Temperatura: {getTemperature(data)}°C</StyledH2>
          </div>
        )}
      </Content>
    </Container>
  );
}
