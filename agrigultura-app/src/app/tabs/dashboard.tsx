import {
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import {
  useEffect,
  useState,
} from "react";

import DashboardCard from "../../components/DashboardCard";

import { dashboardService } from "../../services/dashboardService";

import { Dashboard } from "../../types/Dashboard";

import { COLORS } from "../../constants/colors";

export default function DashboardScreen() {
  const [dados, setDados] =
    useState<Dashboard | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    carregarDashboard();
  }, []);

  async function carregarDashboard() {
    try {
      const response =
        await dashboardService.getDashboard();

      setDados(response);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
      />
    );
  }

  return (
    <ScrollView
      style={styles.container}
    >
      <DashboardCard
        title="🚜 Fazendas"
        value={
          dados?.totalFazendas ?? 0
        }
      />

      <DashboardCard
        title="🌱 Plantações"
        value={
          dados?.totalPlantacoes ??
          0
        }
      />

      <DashboardCard
        title="🛰️ Dados Satelitais"
        value={
          dados?.totalDadosSatelitais ??
          0
        }
      />

      <DashboardCard
        title="🌡️ Temperatura Média"
        value={`${dados?.mediaTemperatura?.toFixed(
          1
        )}°C`}
      />

      <DashboardCard
        title="💧 Umidade Média"
        value={`${dados?.mediaUmidade?.toFixed(
          1
        )}%`}
      />

      <DashboardCard
        title="⚠️ Alertas Temperatura"
        value={
          dados?.alertasTemperatura ??
          0
        }
      />

      <DashboardCard
        title="☀️ Alertas Seca"
        value={
          dados?.alertasSeca ?? 0
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:
      COLORS.background,
  },
});