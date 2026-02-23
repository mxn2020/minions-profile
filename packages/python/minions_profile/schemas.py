"""
Minions Profile SDK — Type Schemas
Custom MinionType schemas for Minions Profile.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

bio_claim_type = MinionType(
    id="profile-bio-claim",
    name="Bio claim",
    slug="bio-claim",
    description="A verifiable claim about skills or experience.",
    icon="🏷️",
    schema=[
        FieldDefinition(name="claim", type="string", label="claim"),
        FieldDefinition(name="evidenceUrl", type="string", label="evidenceUrl"),
        FieldDefinition(name="verified", type="boolean", label="verified"),
        FieldDefinition(name="lastVerifiedAt", type="string", label="lastVerifiedAt"),
        FieldDefinition(name="confidence", type="select", label="confidence"),
    ],
)

portfolio_item_type = MinionType(
    id="profile-portfolio-item",
    name="Portfolio item",
    slug="portfolio-item",
    description="A portfolio project with outcomes, stack, and skill tags.",
    icon="🎨",
    schema=[
        FieldDefinition(name="title", type="string", label="title"),
        FieldDefinition(name="summary", type="string", label="summary"),
        FieldDefinition(name="techStack", type="string", label="techStack"),
        FieldDefinition(name="outcomes", type="string", label="outcomes"),
        FieldDefinition(name="link", type="string", label="link"),
        FieldDefinition(name="ndaProtected", type="boolean", label="ndaProtected"),
        FieldDefinition(name="relevantSkillTags", type="string", label="relevantSkillTags"),
    ],
)

rate_card_type = MinionType(
    id="profile-rate-card",
    name="Rate card",
    slug="rate-card",
    description="Platform-specific pricing for hourly and fixed-rate work.",
    icon="💰",
    schema=[
        FieldDefinition(name="platform", type="string", label="platform"),
        FieldDefinition(name="hourlyMin", type="number", label="hourlyMin"),
        FieldDefinition(name="hourlyMax", type="number", label="hourlyMax"),
        FieldDefinition(name="fixedProjectMin", type="number", label="fixedProjectMin"),
        FieldDefinition(name="currency", type="string", label="currency"),
    ],
)

skill_claim_type = MinionType(
    id="profile-skill-claim",
    name="Skill claim",
    slug="skill-claim",
    description="A specific technical or soft skill with a self-assessed proficiency level.",
    icon="🧠",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="category", type="string", label="category"),
        FieldDefinition(name="proficiency", type="select", label="proficiency"),
        FieldDefinition(name="yearsOfExperience", type="number", label="yearsOfExperience"),
        FieldDefinition(name="lastUsedAt", type="string", label="lastUsedAt"),
        FieldDefinition(name="evidenceIds", type="string", label="evidenceIds"),
    ],
)

availability_type = MinionType(
    id="profile-availability",
    name="Availability",
    slug="availability",
    description="Current availability windows and capacity for new work.",
    icon="📅",
    schema=[
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="hoursPerWeek", type="number", label="hoursPerWeek"),
        FieldDefinition(name="earliestStartDate", type="string", label="earliestStartDate"),
        FieldDefinition(name="timezone", type="string", label="timezone"),
        FieldDefinition(name="preferredEngagementType", type="select", label="preferredEngagementType"),
        FieldDefinition(name="notes", type="string", label="notes"),
    ],
)

custom_types: list[MinionType] = [
    bio_claim_type,
    portfolio_item_type,
    rate_card_type,
    skill_claim_type,
    availability_type,
]

