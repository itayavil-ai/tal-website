'use client'
import { useState } from 'react'
import type { Metadata } from 'next'

// Note: metadata can't be exported from a 'use client' component.
// We use a wrapper pattern — but since this is a simple page, we just use a static title approach.

interface FormState {
  firstName: string
  lastName: string
  phone: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  phone?: string
  email?: string
}

const subjectMap: Record<string, string> = {
  will: 'עריכת צוואה',
  'inheritance-order': 'צו ירושה / צו קיום צוואה',
  estate: 'ניהול עיזבון',
  contest: 'התנגדות לצוואה',
  prenup: 'הסכם ממון',
  mediation: 'גישור משפחתי',
  other: 'אחר',
}

export default function AppointmentPage() {
  const [form, setForm] = useState<FormState>({
    firstName: '', lastName: '', phone: '', email: '', subject: '', message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [key]: e.target.value }))

  function validate(): boolean {
    const errs: FormErrors = {}
    if (!form.firstName.trim()) errs.firstName = 'נא להזין שם פרטי'
    if (!form.lastName.trim()) errs.lastName = 'נא להזין שם משפחה'
    if (!form.phone.trim()) errs.phone = 'נא להזין מספר טלפון'
    else if (!/^0\d{8,9}$/.test(form.phone.replace(/[-\s]/g, ''))) errs.phone = 'מספר טלפון לא תקין'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'כתובת דוא״ל לא תקינה'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSending(true)
    const subjectText = subjectMap[form.subject] || form.subject || 'לא צוין'
    const msg = `שלום, פנייה חדשה מהאתר:\nשם: ${form.firstName} ${form.lastName}\nטלפון: ${form.phone}${form.email ? '\nדוא״ל: ' + form.email : ''}\nנושא: ${subjectText}${form.message ? '\nהודעה: ' + form.message : ''}`
    window.open('https://wa.me/972542233127?text=' + encodeURIComponent(msg), '_blank')
    setSending(false)
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow" data-animate="fade-up" data-delay="0">צרו קשר</p>
          <h1 className="section-title" data-animate="fade-up" data-delay="1">קביעת פגישת<br />ייעוץ ראשונית</h1>
        </div>
      </section>

      <section className="appointment-section">
        <div className="container">
          <div className="appointment-grid">
            <div className="appointment-info" data-animate="fade-up">
              <h2>נשמח לעמוד לרשותכם</h2>
              <p>
                הצעד הראשון לקראת פתרון משפטי מתחיל בשיחה. מלאו את הטופס ונחזור אליכם בהקדם לתיאום פגישת ייעוץ ראשונית ללא עלות. הפגישה מיועדת להכרות, הבנת הצרכים שלכם ומתן הערכה מקצועית ראשונית.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  </div>
                  <div className="contact-text">
                    <strong>טלפון</strong>
                    <a href="tel:+972542233127">054-223-3127</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
                  </div>
                  <div className="contact-text">
                    <strong>דוא״ל</strong>
                    <span>talnatan10@gmail.com</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div className="contact-text">
                    <strong>כתובת</strong>
                    <span>התעשיה 15, רעננה</span>
                  </div>
                </div>
              </div>

              <div className="office-hours">
                <h3>שעות פעילות</h3>
                <div className="hours-row"><span>ראשון — חמישי</span><span>09:00 — 18:00</span></div>
                <div className="hours-row"><span>שישי</span><span>09:00 — 13:00</span></div>
                <div className="hours-row"><span>שבת</span><span>סגור</span></div>
              </div>
            </div>

            <div className="appointment-form-wrapper" data-animate="fade-up" data-delay="1">
              {submitted ? (
                <div className="form-success-message" role="status" aria-live="assertive">
                  <h3 className="form-title">הפנייה נשלחה בהצלחה!</h3>
                  <p className="form-subtitle">תודה רבה. נחזור אליכם בהקדם האפשרי.</p>
                </div>
              ) : (
                <>
                  <h3 className="form-title">השאירו פרטים</h3>
                  <p className="form-subtitle">נחזור אליכם תוך 24 שעות</p>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="firstName">שם פרטי *</label>
                        <input
                          type="text" id="firstName" className="form-input" required autoComplete="given-name"
                          value={form.firstName} onChange={set('firstName')}
                          aria-invalid={errors.firstName ? 'true' : 'false'}
                          aria-describedby={errors.firstName ? 'err-firstName' : undefined}
                        />
                        {errors.firstName && <span className="form-error" id="err-firstName" role="alert">{errors.firstName}</span>}
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="lastName">שם משפחה *</label>
                        <input
                          type="text" id="lastName" className="form-input" required autoComplete="family-name"
                          value={form.lastName} onChange={set('lastName')}
                          aria-invalid={errors.lastName ? 'true' : 'false'}
                          aria-describedby={errors.lastName ? 'err-lastName' : undefined}
                        />
                        {errors.lastName && <span className="form-error" id="err-lastName" role="alert">{errors.lastName}</span>}
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">טלפון *</label>
                        <input
                          type="tel" id="phone" className="form-input" required autoComplete="tel"
                          value={form.phone} onChange={set('phone')}
                          aria-invalid={errors.phone ? 'true' : 'false'}
                          aria-describedby={'phone-hint' + (errors.phone ? ' err-phone' : '')}
                        />
                        <span className="form-hint" id="phone-hint">לדוגמה: 0542233127</span>
                        {errors.phone && <span className="form-error" id="err-phone" role="alert">{errors.phone}</span>}
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">דוא״ל</label>
                        <input
                          type="email" id="email" className="form-input" autoComplete="email"
                          value={form.email} onChange={set('email')}
                          aria-invalid={errors.email ? 'true' : 'false'}
                          aria-describedby={errors.email ? 'err-email' : undefined}
                        />
                        {errors.email && <span className="form-error" id="err-email" role="alert">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="subject">נושא הפנייה</label>
                      <select id="subject" className="form-select" value={form.subject} onChange={set('subject')}>
                        <option value="">בחרו נושא...</option>
                        <option value="will">עריכת צוואה</option>
                        <option value="inheritance-order">צו ירושה / צו קיום צוואה</option>
                        <option value="estate">ניהול עיזבון</option>
                        <option value="contest">התנגדות לצוואה</option>
                        <option value="prenup">הסכם ממון</option>
                        <option value="mediation">גישור משפחתי</option>
                        <option value="other">אחר</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">תיאור קצר של הפנייה</label>
                      <textarea
                        id="message" className="form-textarea"
                        placeholder="ספרו לנו בקצרה על הנושא שלכם..."
                        value={form.message} onChange={set('message')}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg form-submit" disabled={sending}>
                      {sending ? 'שולח...' : 'שליחת פנייה'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
