
import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const HeroesApp = () => {
  return (
    <AuthProvider>
        {/* En el componente padre agregamos el primero router, el router principal */}
        <AppRouter/>
    </AuthProvider>

    )
}
