import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text
} from '@react-email/components'

interface ContactEmailProps {
  userName: string
  userEmail: string
  userMessage: string
  userPhone: string
  userCompany: string
}

export default function ContactEmail({
  userCompany,
  userEmail,
  userMessage,
  userName,
  userPhone
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        {`You've received a new message from the contact form on 1peter4.co.uk`}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={
              'https://res.cloudinary.com/desstrafo/image/upload/v1713816712/one_peter_four/cswhso6ftnbwyxzkk7i3.png'
            }
            width='75'
            alt='1peter4'
            style={logo}
          />
          <Text style={paragraph}>Hi Peter,</Text>
          <Text style={paragraph}>
            <strong>{userName}</strong> from <strong>{userCompany}</strong> has
            sent you a message on the contact form:
          </Text>
          <Text style={message}>{userMessage}</Text>
          <Section style={paragraph}>
            <Row>
              <strong>Email: </strong>
              {userEmail}
            </Row>
            <Row>
              <strong>Tel: </strong>
              {userPhone}
            </Row>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>22 Alma Road, Southport, England, PR8 4AN</Text>
        </Container>
      </Body>
    </Html>
  )
}

ContactEmail.PreviewProps = {
  userName: 'Alan Turing',
  userCompany: 'Bletchfield Park',
  userEmail: 'alan@codebreakers.com',
  userPhone: '07590596765',
  userMessage: "I'm interested in your product"
} as ContactEmailProps

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px'
}

const logo = {
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '0',
  marginBottom: '48px'
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px'
}

const message = {
  fontSize: '16px',
  lineHeight: '26px',
  margin: '48px 0'
}

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0'
}

const footer = {
  color: '#8898aa',
  fontSize: '12px'
}
