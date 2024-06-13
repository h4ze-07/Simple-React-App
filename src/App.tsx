import AllApartments from "./components/AllApartments"
import CreateRent from "./components/CreateRent"
import CustomerRents from "./components/CustomerRents"

function App() {

  return (
    <main className="max-w-[1004px] bg-white mx-auto flex flex-col gap-[40px] my-[150px] rounded-[20px] px-[15px]">
        <h1 className="font-bold text-5xl text-gray-700 mt-[30px]">Apartments Marketplace</h1>

        <CreateRent />
        <CustomerRents />
        <AllApartments />
    </main>
  )
}

export default App
