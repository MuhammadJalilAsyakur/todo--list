import { Container, TabList, Tabs, Tab } from "@chakra-ui/react"
import { VISIBILITY_FILTER } from "../constants"
import { useDispatch } from "react-redux"
import { setFilter } from "../Redux/action"

export const VisibilityFilter = () => {
  const dispatch = useDispatch()
  return (
    <Container centerContent>
        <Tabs>
            <TabList>
               {Object.keys(VISIBILITY_FILTER).map((filterKey) => {
                     const currentFilter = VISIBILITY_FILTER[filterKey]
                        return (
                            <Tab key={`visibility-filter-${currentFilter}`} 
                            onClick={() => dispatch(setFilter(currentFilter))}
                            >
                                {currentFilter}
                            </Tab>
                        )
                    })}
            </TabList>
            </Tabs>
    </Container>
  )
}
