import { List, ListItem, HStack, Image, Text, Spinner } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import GenreListItemSkeleton from './GenreListItemSkeleton'

const GenreList = () => {
    const { data, isLoading, error } = useGenres()
    const skeletons = [1, 2, 3, 4, 5, 6]

    if (error) return null;

    return (
        <List>      
            { isLoading && skeletons.map(skeleton => 
                <GenreListItemSkeleton key={ skeleton } />
            ) }
            { data.map(genre =>
                <ListItem
                    key={ genre.id }
                    paddingY='5px'
                >
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius='8px'
                            src={ getCroppedImageUrl(genre.image_background) }
                        />
                        <Text
                            fontSize='lg'
                        >{ genre.name }
                        </Text>
                    </HStack>
                </ListItem>) }
        </List>
    )
}

export default GenreList