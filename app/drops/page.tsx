import Login from '@/components/Login'
import Message from "@/components/Message"
import AuthContext from "@/libs/AuthContext"

export default function Page() {
  return (
    <>
        <h1 className="m-0 text-2xl mb-5">Drops</h1>
        <AuthContext>
          <Login/>
        </AuthContext>
        <div className="flex flex-col gap-2 text-sm">
          <Message avatar="" username="brandonleetran">This is currently in development</Message>
          <Message avatar="" username="myhpnguyen">Hi Brandon</Message>
          <Message avatar="" username="skoontz">Wow this is sick</Message>
          <Message avatar="" username="jbledsoe">You should use some box shadow on your navigation</Message>
          <Message avatar="" username="rogerMarquis">Hello World</Message>
          <Message avatar="" username="Dakota_South">NextJs + Tailwind is godly</Message>
          <Message avatar="" username="CodeStar">👋 Hey there, Brandon!</Message>
          <Message avatar="" username="DesignNinja">Awesome job, team!</Message>
          <Message avatar="" username="pixelMaster98">Have you considered a dropdown menu for the navigation? 🤔</Message>
          <Message avatar="" username="TechWizard23">Hello, world of developers!</Message>
          <Message avatar="" username="LuckyPanda007">Excited to see whats coming next!</Message>
          <Message avatar="" username="bytemaster">Hey Brandon, any news to share?</Message>
          <Message avatar="" username="DesignPro">How about some hover effects for the navigation? ✨</Message>
          <Message avatar="" username="devguru123">Great progress, everyone!</Message>
          <Message avatar="" username="PixelArtist27">Brandon, this is looking fantastic!</Message>
          <Message avatar="" username="cool_Coder99">Keep up the good work, team!</Message>
          <Message avatar="" username="TechEnthusiast">Hello, fellow developers! ✌️</Message>
          <Message avatar="" username="UIUXMastermind">The UI/UX is on point! 💯</Message>
          <Message avatar="" username="CodingWhiz123">Any ideas for a responsive design?</Message>
          <Message avatar="" username="CodeGenius">Amazing job, guys! The app is top-notch! 👏</Message>
          <Message avatar="" username="artisticDesigner">How about adding some illustrations?</Message>
          <Message avatar="" username="CreativeCoder">Hello, Brandon! Colors look vibrant!</Message>
          <Message avatar="" username="TechSavvy007">Any plans for integrating APIs?</Message>
          <Message avatar="" username="MobileGuru">This app is going to be a game-changer! 🎮</Message>
          <Message avatar="" username="InnovativeDev">Hey, team! Lets push the boundaries!</Message>
          <Message avatar="" username="DesignMaestro">The visual hierarchy is spot on!</Message>
          <Message avatar="" username="CodeExplorer22">Have you thought about accessibility?</Message>
          <Message avatar="" username="WebDevWizard">Impressive work, Brandon! Keep it up!</Message>
          <Message avatar="" username="IdeasUnleashed">How about adding some microinteractions?</Message>
          <Message avatar="" username="DataDrivenDev">Lets make data-driven decisions!</Message>
          <Message avatar="" username="DigitalArtist">This project needs some pixel art! 🎮</Message>
          <Message avatar="" username="DesignThinker">Hey, Brandon! Lets brainstorm some ideas!</Message>
          <Message avatar="" username="CodeSensei">Any tips for optimizing performance?</Message>
          <Message avatar="" username="GlobalCoder">Greetings from around the world! 🌍</Message>
          <Message avatar="" username="CelebrationTime">Congratulations on the progress, everyone! 🎉</Message>
          <Message avatar="" username="code_craftsman09">Hey, Brandon! Your code is elegant!</Message>
          <Message avatar="" username="ArtisticCoder">This app needs some beautiful illustrations!</Message>
          <Message avatar="" username="SecurityGuru">Lets ensure the app is secure! 🔐</Message>
          <Message avatar="" username="AppMagician">Hey, team! Lets make magic happen on mobile! ✨</Message>
          <Message avatar="" username="DesignInnovator">How can we make the design more innovative</Message>
        </div>
    </>
  )
}