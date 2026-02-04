import { useNavigate } from "react-router";
import { APP_PATHS } from "./paths";

export const useAppNavigation = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate(APP_PATHS.HOME)
    }

    return {
        goToHome
    }
}