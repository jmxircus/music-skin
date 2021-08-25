import {
  useClipboard,
  HStack, Box, Button, Text, Tag
} from '@chakra-ui/react'

import { FiCopy } from 'react-icons/fi';

export const CopyAddress = ({ label, labelOnly, address, extra, labelProps, ...rest }) => {
  const { hasCopied, onCopy } = useClipboard(address)
  return (
    <HStack width="100%" {...rest}>
      <Box>
        { (label && !labelOnly) && <Text as="span" color={useColorModeValue('gray.700', 'gray.300')} {...labelProps}>{label}</Text> }
        { labelOnly && <Text as="span" fontWeight="bolder">{label}</Text> }
        { !labelOnly && <Text as="span" fontWeight="bolder">{address.substr(0, 6)}...{address.substr(36)}</Text> }
      </Box>
      <Box>
        <Button size="xs" onClick={onCopy}>{hasCopied ? 'Copied' : <FiCopy />}</Button>
        { extra }
      </Box>
    </HStack>
  )
}
