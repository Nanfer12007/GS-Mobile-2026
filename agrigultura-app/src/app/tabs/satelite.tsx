import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

import {
  useEffect,
  useState,
} from "react";

import { router } from "expo-router";

import { sateliteService } from "../../services/sateliteService";

export default function Satelite() {
  const [dados, setDados] =
    useState<any[]>([]);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    try {
      const response =
        await sateliteService.listar();

      setDados(
        response.content || response
      );
    } catch (error) {
      console.error(
        "Erro ao carregar dados:",
        error
      );
    }
  }

  async function remover(
    id: number
  ) {
    Alert.alert(
      "Excluir Registro",
      "Deseja realmente excluir este dado satelital?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            try {
              await sateliteService.deletar(
                id
              );

              carregar();
            } catch (error) {
              Alert.alert(
                "Erro",
                "Não foi possível excluir."
              );

              console.error(error);
            }
          },
        },
      ]
    );
  }

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor:
            "#1565C0",
          padding: 15,
          borderRadius: 10,
          marginBottom: 15,
        }}
        onPress={() =>
          router.push(
            "/satelite/nova"
          )
        }
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Novo Registro
        </Text>
      </TouchableOpacity>

      <FlatList
        data={dados}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor:
                "#fff",
              padding: 15,
              marginBottom: 10,
              borderRadius: 10,
            }}
          >
            <Text>
              🌡️ Temperatura:
              {" "}
              {item.temperatura}°C
            </Text>

            <Text>
              💧 Umidade:
              {" "}
              {item.umidadeSolo}%
            </Text>

            <Text>
              🌿 NDVI:
              {" "}
              {item.indiceVegetacao}
            </Text>

            <Text>
              ☀️ Risco de Seca:
              {" "}
              {item.riscoSeca}
            </Text>

            <View
              style={{
                flexDirection: "row",
                marginTop: 15,
                gap: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor:
                    "#FF9800",
                  padding: 10,
                  borderRadius: 8,
                  flex: 1,
                }}
                onPress={() =>
                  router.push({
                    pathname:
                      "/satelite/editar",
                    params: {
                      id: item.id,
                    },
                  })
                }
              >
                <Text
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  ✏️ Editar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor:
                    "#D32F2F",
                  padding: 10,
                  borderRadius: 8,
                  flex: 1,
                }}
                onPress={() =>
                  remover(item.id)
                }
              >
                <Text
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  🗑️ Excluir
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}