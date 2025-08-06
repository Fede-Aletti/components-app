import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes'
import MenuItem from '@/presentation/menu/menu-item'
import React from 'react'
import { View } from 'react-native'

const Index = () => {
    return (
        <View>

            <View className='mt-10'>
                {animationMenuRoutes.map((route, index) => (
                    <MenuItem
                        name={route.name}
                        key={route.name}
                        title={route.title}
                        icon={route.icon}
                        isFirst={index === 0}
                        isLast={index === animationMenuRoutes.length - 1}
                    />
                ))}
                <View className='my-4'/>

                {uiMenuRoutes.map((route, index) => (
                    <MenuItem
                        name={route.name}
                        key={route.name}
                        title={route.title}
                        icon={route.icon}
                        isFirst={index === 0}
                        isLast={index === animationMenuRoutes.length - 1}
                    />
                ))}
    
                <View className='my-4'/>

                {menuRoutes.map((route, index) => (
                    <MenuItem
                        name={route.name}
                        key={route.name}
                        title={route.title}
                        icon={route.icon}
                        isFirst={index === 0}
                        isLast={index === animationMenuRoutes.length - 1}
                    />
                ))}
            </View>

        </View>
    )
}

export default Index