import Image from 'next/image'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import Accordion from 'components/accordion'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'

import eyecatch from 'images/about.jpg'
import Meta from 'components/meta'

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="アバウト"
        pageDesc="About development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="About" subtitle="About development activities" />
      <figure>
        <Image
          src={eyecatch}
          alt=""
          width={1920}
          height={960}
          sizes="(min-width:1152px)1152px,100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          priority
        />
      </figure>
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <h2>FAQ</h2>
            <Accordion heading="このブログでは、すべての国の情報が見られますか？">
              <p>
                はい、現在当ブログでは、国連加盟国および主要な非加盟国を含む、世界中のすべての独立国の紹介を目指しています。現時点ではすべての国の記事が揃っているわけではありませんが、毎週新しい国の情報を追加しています。お探しの国が見つからない場合は、お手数ですがしばらくお待ちいただくか、お問い合わせフォームからリクエストをお送りください。
              </p>
            </Accordion>
            <Accordion heading="記事の情報はどのくらい新しいですか？旅行の計画に利用できますか？">
              <p>
                各国の記事は、公開時点での最新情報に基づいて作成されています。しかし、情勢や制度は常に変化するため、旅行の計画にご利用の際は、必ずご自身で各国の外務省や観光局など、公的な機関の最新情報を確認してください。
                当ブログの情報はあくまで一般的な紹介を目的としており、特定の判断を推奨するものではありません。
              </p>
            </Accordion>
            <Accordion heading="記事のリクエストはできますか？また、自分で書いた記事を投稿することは可能ですか？">
              <p>
                はい、記事のリクエストは大歓迎です！リクエストページからお気軽にお寄せください。いただいたリクエストは今後の記事作成の参考にさせていただきます。
                また、残念ながら現在、読者の方からの直接の記事投稿は受け付けておりませんが、将来的に寄稿システムを導入することも検討しております。もし特定の国の情報提供にご興味があれば、ぜひお問い合わせフォームからご連絡ください。
              </p>
            </Accordion>
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}
