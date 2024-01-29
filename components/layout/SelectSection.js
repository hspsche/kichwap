import { Button } from '@chakra-ui/react'

const SelectSection = (props) => {
    return (
        <Button
            variant='headerButton'
        >
            { props.title }
        </Button>
    )
}
export { SelectSection }