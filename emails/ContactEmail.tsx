import { Html, Section, Tailwind, Text } from '@react-email/components'

export default function Email({
  userEmail,
  userMessage,
  userName,
  userPhone,
  userCompany
}: {
  userName: string
  userEmail: string
  userMessage: string
  userPhone: string
  userCompany: string
}) {
  return (
    <Tailwind>
      <Html lang='en'>
        <Section>
          <Text>{`Enquiry from ${userName}`}</Text>
          <Text>{`Company Name: ${userCompany}`}</Text>
          <Text>{`Email Address: ${userEmail}`}</Text>
          <Text>{`Phone Number: ${userPhone}`}</Text>
          <Text>{`Message: ${userMessage}`}</Text>
        </Section>
      </Html>
    </Tailwind>
  )
}
