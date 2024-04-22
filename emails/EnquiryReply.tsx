import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text
} from '@react-email/components'

interface EnquiryReplyProps {
  userName: string
}

export default function EnquiryReply({ userName }: EnquiryReplyProps) {
  return (
    <Html>
      <Head />
      <Preview>{`Thank you for your enquiry to One Peter Four`}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={
              'https://res.cloudinary.com/desstrafo/image/upload/v1713816721/one_peter_four/pv2yahrmudcqisngobuz.png'
            }
            height='75'
            alt='1peter4'
            style={logo}
          />
          <Text style={paragraph}>{`Hi ${userName},`}</Text>
          <Text style={paragraph}>
            Thank you for getting in touch! We just wanted to let you know that
            your enquiry has reached us successfully and one of our team will be
            following up with you shortly at the contact details you provided.
          </Text>
          <Section style={{ marginTop: '36px' }}>
            <Text style={paragraph}>
              Have a great day and we look forward to speaking with you soon!
            </Text>
            <Text style={paragraph}>Team at One Peter Four</Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>22 Alma Road, Southport, England, PR8 4AN</Text>
        </Container>
      </Body>
    </Html>
  )
}

EnquiryReply.PreviewProps = {
  userName: 'Alan Turing',
  userCompany: 'Bletchfield Park',
  userEmail: 'alan@codebreakers.com',
  userPhone: '07590596765',
  userMessage: "I'm interested in your product"
} as EnquiryReplyProps

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

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0'
}

const footer = {
  color: '#8898aa',
  fontSize: '12px'
}
