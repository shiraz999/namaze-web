import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-primary-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-500">Last updated: 30 July 2026</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 space-y-8 text-gray-700 leading-relaxed">
              <p>
                This Privacy Policy explains how NAMAZI ("we", "our", "the app") collects, uses,
                and protects your information when you use our mobile application and related
                services. By using NAMAZI, you agree to the practices described in this policy.
              </p>

              <div>
                <h2 className="font-display font-bold text-2xl text-primary-900 mb-3">
                  Information We Collect
                </h2>
                <p className="mb-3">We collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-semibold">Account information:</span> name, phone
                    number, date of birth, occupation, preferred language, and your home
                    location, provided when you create an account or sign in (including via
                    Google Sign-In).
                  </li>
                  <li>
                    <span className="font-semibold">Location data:</span> with your permission,
                    we access your device's precise (and, where enabled, background) location to
                    find nearby masjids, calculate local prayer times, and deliver
                    proximity-based alerts.
                  </li>
                  <li>
                    <span className="font-semibold">Photos:</span> images you choose to upload,
                    such as photos of a masjid when creating or updating a masjid listing, or
                    attachments to broadcast posts.
                  </li>
                  <li>
                    <span className="font-semibold">Device and notification data:</span> a push
                    notification token used to deliver azan reminders and masjid broadcast
                    alerts.
                  </li>
                  <li>
                    <span className="font-semibold">Masjid information:</span> if you register or
                    manage a masjid, we collect the masjid name, address, and contact details you
                    submit, linked to your account.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl text-primary-900 mb-3">
                  How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To show you nearby masjids and accurate local prayer times.</li>
                  <li>To send azan reminders and masjid broadcast notifications.</li>
                  <li>To let you create, manage, and personalize your account and masjid listings.</li>
                  <li>To operate and improve the core functionality of the app.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl text-primary-900 mb-3">
                  Third Parties
                </h2>
                <p>
                  We use Google Sign-In for authentication and Firebase Cloud Messaging (a Google
                  service) to deliver push notifications. Your data is otherwise stored on our own
                  backend servers. We do not use advertising networks, and we do not use any
                  third-party analytics or tracking SDKs.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl text-primary-900 mb-3">
                  Data Storage &amp; Security
                </h2>
                <p>
                  Your information is stored on our own servers and protected with reasonable
                  technical and organizational safeguards. We do not sell your personal
                  information to third parties.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl text-primary-900 mb-3">
                  Data Retention &amp; Deletion
                </h2>
                <p>
                  We retain your account information for as long as your account is active. To
                  request access to, correction of, or deletion of your data, email us at{' '}
                  <a
                    href="mailto:support@namazi-app.com"
                    className="text-primary-700 font-semibold hover:text-gold-500"
                  >
                    support@namazi-app.com
                  </a>
                  . We will process your request within a reasonable timeframe.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl text-primary-900 mb-3">
                  Children's Privacy
                </h2>
                <p>
                  NAMAZI is intended for a general audience and is not directed at children. We
                  do not knowingly collect personal information from children.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl text-primary-900 mb-3">
                  Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on
                  this page with an updated "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl text-primary-900 mb-3">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a
                    href="mailto:support@namazi-app.com"
                    className="text-primary-700 font-semibold hover:text-gold-500"
                  >
                    support@namazi-app.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
