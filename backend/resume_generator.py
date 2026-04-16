from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch, mm
from reportlab.lib.colors import HexColor
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT
import io


def generate_resume_pdf() -> bytes:
    buffer = io.BytesIO()
    doc = SimpleDocTemplate(
        buffer, pagesize=A4,
        leftMargin=0.75 * inch, rightMargin=0.75 * inch,
        topMargin=0.6 * inch, bottomMargin=0.6 * inch,
    )

    styles = getSampleStyleSheet()
    primary = HexColor("#2563EB")
    dark = HexColor("#0F172A")
    muted = HexColor("#475569")

    # Custom styles
    name_style = ParagraphStyle("Name", parent=styles["Title"], fontSize=26, textColor=dark, spaceAfter=2, leading=30)
    title_style = ParagraphStyle("Title2", parent=styles["Normal"], fontSize=13, textColor=primary, spaceAfter=6)
    contact_style = ParagraphStyle("Contact", parent=styles["Normal"], fontSize=9, textColor=muted, spaceAfter=12)
    section_head = ParagraphStyle("SectionHead", parent=styles["Heading2"], fontSize=13, textColor=primary, spaceBefore=14, spaceAfter=6, borderWidth=0)
    body = ParagraphStyle("Body", parent=styles["Normal"], fontSize=10, textColor=dark, leading=14, spaceAfter=4)
    body_muted = ParagraphStyle("BodyMuted", parent=styles["Normal"], fontSize=9.5, textColor=muted, leading=13, spaceAfter=2)
    bullet_style = ParagraphStyle("Bullet", parent=body, leftIndent=12, bulletIndent=0, spaceAfter=3)
    tag_style = ParagraphStyle("Tag", parent=styles["Normal"], fontSize=9, textColor=muted)

    elements = []

    # Header
    elements.append(Paragraph("Sandeep Dash", name_style))
    elements.append(Paragraph("Senior Software Engineer", title_style))
    elements.append(Paragraph("sandeepdash108@gmail.com  |  +44-7799557005  |  Coventry, UK  |  github.com/sandeepdash1  |  linkedin.com/in/sandeepdash92", contact_style))

    # Divider
    elements.append(Spacer(1, 4))

    # Summary
    elements.append(Paragraph("PROFESSIONAL SUMMARY", section_head))
    elements.append(Paragraph(
        "A motivated Senior Software Engineer with 6+ years of experience in Java, Spring Boot, and enterprise application development. "
        "Specialized in API modernization, microservices architecture, and leading cross-functional teams. "
        "Proven track record of generating significant business value and improving system performance through innovative technical solutions.",
        body
    ))

    # Skills
    elements.append(Paragraph("SKILLS & EXPERTISE", section_head))
    skills_data = [
        ("Programming Languages", "Java, J2EE"),
        ("Frameworks", "Spring Boot, Spring MVC 5, Hibernate5, Microservices, REST API, Apache Camel, Struts, Kafka"),
        ("Web / Enterprise", "HTML, JavaScript, Angular, Postman"),
        ("RDBMS", "MySQL, Oracle, DB2, RDS"),
        ("Web Servers", "Tomcat 6/7/8/9, Liberty"),
        ("Cloud Platforms", "AWS, Azure"),
        ("IDE", "Eclipse, Visual Studio Code, STS, RAD, IntelliJ IDEA"),
        ("Version Control", "Git, SVN"),
        ("Build / Deployment", "Maven"),
        ("Monitoring", "Splunk, Lens"),
        ("Operating Systems", "Windows, Ubuntu 16.04, Linux"),
        ("Agile Methodologies", "Agile/Scrum, JIRA"),
    ]
    for label, skills in skills_data:
        elements.append(Paragraph(f"<b>{label}:</b> {skills}", body_muted))

    # Certifications
    elements.append(Paragraph("CERTIFICATIONS", section_head))
    elements.append(Paragraph("<bullet>&bull;</bullet> Generative AI Bootcamp - Growth School (LLMs, Prompt Engineering, AI-Powered App Development)", bullet_style))
    elements.append(Paragraph("<bullet>&bull;</bullet> Claude 101 - Anthropic (Claude AI Fundamentals, Effective Prompt Techniques, Building with Claude API)", bullet_style))

    # Work Experience
    elements.append(Paragraph("WORK EXPERIENCE", section_head))

    work_exp = [
        {
            "company": "Cognizant Solutions Pvt Ltd",
            "role": "Senior Associate",
            "period": "Jul 2021 - Jun 2025",
            "location": "Bengaluru, India",
            "bullets": [
                "Managing API Modernization for project ARGO for Canada Life, migrating legacy code base to Spring Boot to boost performance and security.",
                "Led MetLife's SBR unit, managing liability financing and executive benefit plans while driving Agile practices.",
                "Generated revenue of $343,828 with 40% profit for Business.",
                "Supported onshore team resulting in 30% faster project timeline and 25% reduction in post-launch issue resolution time.",
            ],
        },
        {
            "company": "Splenta Systems Pvt Ltd",
            "role": "Senior Software Engineer",
            "period": "Dec 2019 - Jul 2021",
            "location": "Bengaluru, India",
            "bullets": [
                "Developed fund transfer modules (Intra, NEFT, IMPS) with bulk upload/transaction features for corporate accounts.",
                "Built transaction alerts and wallet operations (block/unblock), improving customer service by 25%.",
                "Created T+1 reconciliation portal for failed transactions, enhancing financial transparency.",
                "Delivered user-friendly service platform that boosted customer retention by 24%.",
            ],
        },
        {
            "company": "E-Square Software India Pvt Ltd",
            "role": "Software Engineer",
            "period": "May 2019 - Nov 2019",
            "location": "Bengaluru, India",
            "bullets": [
                "Developed Eclipse-based IDE for Bosch using JavaScript, RCP, and RCPTT, improving data processing efficiency by 35%.",
                "Built online recruitment management system with Spring Boot, resulting in 30% boost in recruitment efficiency.",
                "Contributed to building a global Learning Management System (LMS) using Spring and Hibernate.",
            ],
        },
    ]
    for w in work_exp:
        elements.append(Paragraph(f"<b>{w['company']}</b> - {w['role']}", body))
        elements.append(Paragraph(f"{w['period']}  |  {w['location']}", body_muted))
        for b in w["bullets"]:
            elements.append(Paragraph(f"<bullet>&bull;</bullet> {b}", bullet_style))
        elements.append(Spacer(1, 4))

    # Education
    elements.append(Paragraph("EDUCATION", section_head))
    elements.append(Paragraph("<b>Siksha 'O' Anusandhan University</b>", body))
    elements.append(Paragraph("Bachelor of Technology | Mechanical Engineering  |  Aug 2010 - Jul 2014", body_muted))
    elements.append(Spacer(1, 4))

    # Projects
    elements.append(Paragraph("FEATURED PROJECTS", section_head))

    projects = [
        {
            "title": "MetLife - Specialized Benefit Resources (SBR)",
            "tech": "Java, Spring Boot, Microservices, REST API, Oracle",
            "desc": "Specialized Benefit Resources (SBR), a full-service unit within MetLife, focuses exclusively on the design, implementation and administration of liability financing and corporate executive benefit plans. Excellent track record for meeting deadlines and submitting high quality deliverables on time while mentoring team members.",
        },
        {
            "title": "API Modernization - Project ARGO (Canada Life)",
            "tech": "Spring Boot, Microservices, DB2, Splunk, Maven",
            "desc": "Led API modernization for Canada Life, migrating legacy OSGI application to Spring Boot, boosting performance and security. Demonstrated magnificent competency working as Software Development Engineer on challenging projects under stressful environments.",
        },
        {
            "title": "Reconciliation Systems - Federal Bank",
            "tech": "Spring Boot, Oracle, REST API, Maven, Eclipse",
            "desc": "Engineered secure reconciliation modules processing 5,000+ daily transactions with 99.99% success rate. Extensive knowledge of various Java developing projects with proven project management skills.",
        },
        {
            "title": "Eclipse IDE Development (Bosch)",
            "tech": "Java, JavaScript, Eclipse RCP, Git, Maven",
            "desc": "Developed Eclipse-based IDE for Bosch using JavaScript and RCP, improving data processing efficiency by 35%. Enhanced team and project management skills through continuous mentoring of team members.",
        },
    ]
    for p in projects:
        elements.append(Paragraph(f"<b>{p['title']}</b>", body))
        elements.append(Paragraph(f"<i>{p['tech']}</i>", body_muted))
        elements.append(Paragraph(p["desc"], body_muted))
        elements.append(Spacer(1, 4))

    doc.build(elements)
    buffer.seek(0)
    return buffer.read()
