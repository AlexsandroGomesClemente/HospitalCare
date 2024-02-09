import "../../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import DashboardChatMain from "./DashboardChartMain";
import DashboardChartSecond from "./DashboardChartSecond";

const dataChart1 = {
  title : "Quantidade de pacientes",
  qtd : 550,
  series: [312,423,414,443,132,431,443,412,234,322,423,565]
}

const dataChart2 = {
  title : "Quantidade de exames",
  qtd : 550,
  series: [312,423,414,443,132,431,443,412,234,322,423,565]
}

const dataChart3 = {
  title : "Preço médio por exame",
  qtd : 412,
  series: [312,423,414,443,132,431,443,412,234,322,423,565]
}

function DashboardChats() {
  return (
    <div className="dashboard-conteudo">
      <DashboardChatMain />

      <DashboardChartSecond config={dataChart1} />
      <DashboardChartSecond config={dataChart2} />
      <DashboardChartSecond config={dataChart3} />
    </div>
  );
}

export default DashboardChats;
