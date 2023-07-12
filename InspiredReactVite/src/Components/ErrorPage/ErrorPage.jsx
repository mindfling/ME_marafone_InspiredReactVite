import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
  
  const error = useRouteError();
  
  return (
    <div>
      <h2>Errrrror 404</h2>
      <p>Наша ошибка {error?.message || 'Неизвестная ошибка'}</p>
    </div>
  )
}