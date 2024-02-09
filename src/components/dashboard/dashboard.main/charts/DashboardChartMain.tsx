import "../../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";

function DashboardChatMain() {
  const {t} = useTranslation()
  const series = [
    {
      name: "Pacientes",
      data: [31, 40, 28, 51, 42, 109, 200, 31, 40, 28, 51, 42],
    },
    {
      name: "Exames",
      data: [11, 32, 45, 32, 34, 52, 41, 11, 32, 45, 32, 34],
    },
  ];

  const config = {
    chart: {
      height: 200,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: true,
      borderColor: "#90A4AE",
      strokeDashArray: 6,
      position: "front",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      row: {
        colors: undefined,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 10,
      },
    },

    colors: ["#50c77c", "#FFAE1A"],
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: [
        "JAN",
        "FEV",
        "MAR",
        "ABR",
        "MAI",
        "JUN",
        "JUL",
        "AGO",
        "SET",
        "OUT",
        "NOV",
        "DEZ",
      ],
    },
    legend: {
      show: true,
      position: "top",
      offsetX: "20%",
      offsetY: -2,
      floating: true,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    tooltip: {
      enabled: false,
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  return (
    <div className="dashboard-card-chart">
      <h5>{t('registers')}</h5>
      <Chart
        options={config}
        series={series}
        type="area"
        height={200}
        width={"99%"}
      />
    </div>
  );
}

export default DashboardChatMain;
