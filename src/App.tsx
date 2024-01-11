import { ThemeProvider } from 'styled-components'; // Apply Theme
import { defaultTheme } from './styles/themes/default'; 
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello World Coffee Delivery App</h1>
      <GlobalStyle/>
    </ThemeProvider>
  )
}