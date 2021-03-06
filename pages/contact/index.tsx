import Link from 'next/link'
import MainLayout from '../../components/layouts/MainLayout';

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Home</h1>
      <h1 className="title">
        Ir a<Link href="/contact">Contact</Link>
      </h1>

      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/contact.js</code>
      </p>
    </MainLayout>
  )
}