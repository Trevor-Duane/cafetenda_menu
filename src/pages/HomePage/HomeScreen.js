import React from 'react'
import MyNav from '../../components/navBar/MyNav'
import { ScrollView, Text, View } from 'react-native-web'
import { groups } from '../../mock-data/Groups'
import GroupCard from '../../components/GroupCard'

function HomeScreen() {
  return (
    <>
      <MyNav />

      <ScrollView>
        <div className="groupRowGrid">
          {groups.map((g) => (
            <GroupCard
              key={g.id}
              group_name={g.name}
              cover={g.cover_image}
            />
          ))}
        </div>
      </ScrollView>

    </>
  )
}

export default HomeScreen