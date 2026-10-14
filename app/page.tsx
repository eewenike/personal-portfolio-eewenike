import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { ExperienceSection } from '@/components/experience-section'
import { Hero } from '@/components/hero'
import { InterestsSection } from '@/components/interests-section'
import { StrengthsSection } from '@/components/strengths-section'
import { ProjectsSection } from '@/components/projects-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SkillsSection } from '@/components/skills-section'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <StrengthsSection />
        <SkillsSection />
        <InterestsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
