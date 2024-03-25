import { Badge, Flex } from '@sanity/ui'
import { PreviewLayoutKey, PreviewProps } from 'sanity'

/**
 * This component is used to render a custom preview for a list of items in the Sanity Studio.
 * It requires that an `isEnabled` boolean field be present in the schema and that it is added
 * to the preview.select object and finally passed into the prepare function and subsequntly
 * returned from it so that it is available on the props object.
 *
 */
export const CustomListPreview = (props: PreviewProps<PreviewLayoutKey>) => {
  return (
    <Flex justify='space-between' align='center'>
      <span>{props.renderDefault({ ...props })}</span>
      <span>
        {(props as PreviewProps<PreviewLayoutKey> & { isEnabled?: boolean })
          ?.isEnabled ? (
          <Badge radius={3} paddingY={2} paddingX={2} tone='positive'>
            Enabled
          </Badge>
        ) : (
          <Badge radius={3} paddingY={2} paddingX={2} tone='primary'>
            Disabled
          </Badge>
        )}
      </span>
    </Flex>
  )
}
