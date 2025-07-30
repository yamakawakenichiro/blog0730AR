import Meta from "components/meta"
import Container from "components/container"
import Hero from "components/hero"

export default function Custom404() {
  return (
    <Container>
      <Meta pateTitle="404 - page not found" />
      <Hero title="404" subtitle="ページが見つかりません" />
    </Container>
  )
}
