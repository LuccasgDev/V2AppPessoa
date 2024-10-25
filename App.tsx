// App.tsx
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import { Editar } from './src/screens/Editar/Editar';

export default function App() {
  return (
    <>
      <Routes/>
      <StatusBar style="auto" />
    </>
  );
}
