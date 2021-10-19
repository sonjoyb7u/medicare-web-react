import { useContext } from "react"
import { AuthContext } from "../Context/AuthDataProvider"

const useAuth = () => {
    return useContext(AuthContext)
}


export default useAuth