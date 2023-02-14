import AuthContext from 'components/AuthContext'

export interface DropsLayoutProps {
  children: React.ReactNode
}

export default function DropsLayout({ children }: DropsLayoutProps) {
  return <AuthContext>{children}</AuthContext>
}
