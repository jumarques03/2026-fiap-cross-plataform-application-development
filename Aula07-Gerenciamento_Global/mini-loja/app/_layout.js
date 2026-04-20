import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { CarrinhoProvider } from '../context/CarrinhoContext';

export default function Layout() {
  return (
    <CarrinhoProvider>
        <Tabs 
            screenOptions={{ 
                tabBarActiveTintColor: '#3d48e8',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                },
                headerTitleAlign: 'center',
                tabBarLabelStyle: {
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            }}
        >
        <Tabs.Screen
            name="index"
            options={{
            title: '🛍️ Produtos',
            tabBarLabel: 'Produtos',
            tabBarIcon: ({ color }) => <Ionicons name="bag-handle" color= {color} size={24} />,
            }}
        />
        <Tabs.Screen
            name="carrinho"
            options={{
            title: '🛒 Seu Carrinho',
            tabBarLabel: 'Carrinho',
            tabBarIcon: ({ color }) => <Ionicons name="cart" color= {color} size={24} />,
            }}
        />
        </Tabs>
    </CarrinhoProvider>
  );
}