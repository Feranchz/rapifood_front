import Image from "next/image";
import { useEffect, useState } from "react";
import { useUser } from "../../components/Utils/useUser";
import { CreditCard } from "../../components/Visuals/CreditCard";
import { OrderItem } from "../../components/Visuals/OrderItem.tsx";
import { Tabs } from "../../components/Visuals/Tabs.tsx";
import { CreditCardModal } from "../../components/Modals/CreditCardModal"
import { UserInfo } from "../../components/Visuals/UserInfo";
import { useRouter } from "next/router";
import { useRequest } from "../../components/Utils/useRequests";

const PEDIDOS_DUMMY = [
  {
    id: 1,
    total: 40.5,
    address: "Apt. 2B, Edf. Ondarreta Sur, Av. Sanz, El Marqués, Caracas",
    status: "waiting-payment",
    order: [
      {
        image: "/test/burger.jpg",
        name: "Calzone",
        restaurant: "Simone's",
        quantity: 2,
        total: 30.5,
        extras: [
          {
            name: "Refresco 2LT",
            quantity: 1,
            total: 5
          },
          {
            name: "Refresco 2LT",
            quantity: 1,
            total: 5
          }
        ]
      },
      {
        image: "/test/burger.jpg",
        name: "Calzone",
        restaurant: "Simone's",
        quantity: 2,
        total: 30.5,
        extras: [
          {
            name: "Refresco 2LT",
            quantity: 1,
            total: 5
          },
          {
            name: "Refresco 2LT",
            quantity: 1,
            total: 5
          }
        ]
      }
    ]
  },
  {
    id: 2,
    total: 40.5,
    address: "Apt. 2B, Edf. Ondarreta Sur, Av. Sanz, El Marqués, Caracas",
    status: "in-delivery",
    order: [
      {
        image: "/test/burger.jpg",
        name: "Calzone",
        restaurant: "Simone's",
        quantity: 2,
        total: 30.5,
        extras: [
          {
            name: "Refresco 2LT",
            quantity: 1,
            total: 5
          },
          {
            name: "Refresco 2LT",
            quantity: 1,
            total: 5
          }
        ]
      },
      {
        image: "/test/burger.jpg",
        name: "Calzone",
        restaurant: "Simone's",
        quantity: 2,
        total: 30.5,
        extras: [
          {
            name: "Refresco 2LT",
            quantity: 1,
            total: 5
          },
          {
            name: "Refresco 2LT",
            quantity: 1,
            total: 5
          }
        ]
      }
    ]
  },
  {
    id: 3,
    total: 40.5,
    address: "Apt. 2B, Edf. Ondarreta Sur, Av. Sanz, El Marqués, Caracas",
    status: "completed",
    order: [
      {
        image: "/test/burger.jpg",
        name: "Calzone",
        restaurant: "Simone's",
        quantity: 2,
        total: 30.5,
        extras: [
          {
            name: "Refresco 2LT",
            quantity: 1,
            total: 5
          },
          {
            name: "Refresco 2LT",
            quantity: 1,
            total: 5
          }
        ]
      },
      {
        image: "/test/burger.jpg",
        name: "Calzone",
        restaurant: "Simone's",
        quantity: 2,
        total: 30.5,
        extras: [
          {
            name: "Refresco 2LT",
            quantity: 1,
            total: 5
          },
          {
            name: "Refresco 2LT",
            quantity: 1,
            total: 5
          }
        ]
      }
    ]
  },
]

const TARJETAS_DUMMY = [
  {
    lastNumbers: "4561",
    name: "Fernando Chavez",
    bank: "React Bank"
  }
]

const Account = ({ tab }) => {
  const { userHook } = useUser()
  const user = userHook()
  const [activeTab, setActiveTab] = useState(tab)
  const [creditCardModal, setCreditCardModal] = useState(false)
  const router = useRouter()

  const [orders, setOrders] = useState([])
  const { get } = useRequest()

  useEffect(() => {
    setActiveTab(tab)
  }, [tab])

  useEffect(() => {
    router.push(`/cuenta/${activeTab}`, `/cuenta/${activeTab}`, {
      shallow: true
    })
  }, [activeTab])

  useEffect(() => {
    const fetchOrders = async () => {
      if(activeTab == "pedidos"){
        const res = await get("/myOrders")
        if(res?.data?.length > 0){
          setOrders(res.data)
        } else {
          setOrders([])
        }
      }
    }

    fetchOrders()
  }, [activeTab])

  const OPTIONS = [
    {
      key: "pedidos",
      name: "Pedidos"
    }
  ]

  return (
    <div className="md:max-w-4xl md:mx-auto">
      <div className="flex flex-wrap p-2 md:align-top items-start">
        <div className="w-full md:w-1/3 shadow-md rounded-lg border py-2 px-4 flex flex-wrap md:content-start">
          <div className="w-1/3 md:w-full relative px-2">
            <div className="relative w-full h-20 md:h-40 rounded-lg overflow-hidden">
              <Image src="/gradient.jpg" className="combo-image" layout="fill" />
            </div>
          </div>
          <div className="w-2/3 md:px-4">
            <h2 className="font-bold text-xl">{user.name} {user.lastname}</h2>
            <p>{user.email}</p>
            <p className="text-sm">Miembro desde hoy</p>
          </div>
          <div className="w-full md:hidden">
            <Tabs options={OPTIONS} active={activeTab} changeTab={setActiveTab} />
          </div>
        </div>
        <div className="w-full md:w-2/3 md:pl-2">
          <div className="shadow-md rounded-lg border py-2 hidden md:block">
            <Tabs options={OPTIONS} active={activeTab} changeTab={setActiveTab} />
          </div>
          {/* Cuenta */}
          {
            activeTab == "cuenta" ?
            <div>
              <UserInfo />
            </div>
            : null
          }

          {/* Pedidos */}
          {
            activeTab == "pedidos" ?
            <div className="py-2">
              {
                orders.map((order) => 
                  <OrderItem {...order} />
                ) 
              }
            </div> 
            : null
          }

          {/* Tarjetas */}
          {
            activeTab == "tarjetas" ?
            <div className="py-2">
              <div className="py-1">
                <button className="w-full button-with-gradient font-bold rounded-lg py-1" onClick={() => setCreditCardModal(true)}>Agregar Tarjeta</button>
              </div>
              {
                TARJETAS_DUMMY.map(card => 
                  <CreditCard {...card} />
                )
              }
              <CreditCardModal visible={creditCardModal} close={() => setCreditCardModal(false)} />
            </div>
            : null
          }
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context){
  let tab = context.params?.option ? context.params.option[0] : "cuenta"



  return {
    props: {
      tab
    }
  }
}

export default Account;