import { Box } from '@chakra-ui/react'
import { SelectSection } from './SelectSection';

const Sections = () => {

    return (
        <Box
            h='100%'
            overflowX='hidden'
            whiteSpace='nowrap'
        >
            <SelectSection
                title='Curso'
            />
            <SelectSection
                title='Quizzes'
            />
            <SelectSection
                title='Foro'
            />
        </Box> 
    )
}
export { Sections }