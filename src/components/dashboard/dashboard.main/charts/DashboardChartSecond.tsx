import "../../../../assets/styles/components.css/dashboard.css/Dashboard.component.css";
import Chart from "react-apexcharts";

function DashboardChartSecond() {
  const series1 = [
    {
      name: "Pacientes",
      data: [31, 40, 28, 51, 42, 109, 200, 310, 400, 450, 480, 500],
    },
  ];

  const config1 = {
    chart: {
      height: 200,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
      borderColor: "#90A4AE",
      strokeDashArray: 6,
      position: "front",
      xaxis: {
        lines: {
          show: false,
        },
      },
      axisTicks: {
        show: false,
        borderType: "solid",
        color: "#78909C",
        height: 6,
        offsetX: 0,
        offsetY: 0,
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
        left: 0,
      },
    },

    colors: ["#868686"],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
        borderType: "solid",
        color: "#78909C",
        height: 6,
        offsetX: 0,
        offsetY: 0,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    legend: {
      show: false,
      position: "top",
      offsetX: "20%",
      offsetY: -2,
      floating: true,
    },
    stroke: {
      show: false,
    },
    tooltip: {
      enabled: false,
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  return (
    <div className="dashboard-card">
      <h6>Pacientes Registrados</h6>
      <span>10.000</span>

      <Chart
        options={config1}
        series={series1}
        type="area"
        height={90}
        width={"100%"}
      />
    </div>
  );
}

export default DashboardChartSecond;
