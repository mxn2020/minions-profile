/**
 * @module @minions-profile/sdk/schemas
 * Custom MinionType schemas for Minions Profile.
 */

import type { MinionType } from 'minions-sdk';

export const bioclaimType: MinionType = {
  id: 'profile-bio-claim',
  name: 'Bio claim',
  slug: 'bio-claim',
  description: 'A verifiable claim about skills or experience.',
  icon: '🏷️',
  schema: [
    { name: 'claim', type: 'string', label: 'claim' },
    { name: 'evidenceUrl', type: 'string', label: 'evidenceUrl' },
    { name: 'verified', type: 'boolean', label: 'verified' },
    { name: 'lastVerifiedAt', type: 'string', label: 'lastVerifiedAt' },
    { name: 'confidence', type: 'select', label: 'confidence' },
  ],
};

export const portfolioitemType: MinionType = {
  id: 'profile-portfolio-item',
  name: 'Portfolio item',
  slug: 'portfolio-item',
  description: 'A portfolio project with outcomes, stack, and skill tags.',
  icon: '🎨',
  schema: [
    { name: 'title', type: 'string', label: 'title' },
    { name: 'summary', type: 'string', label: 'summary' },
    { name: 'techStack', type: 'string', label: 'techStack' },
    { name: 'outcomes', type: 'string', label: 'outcomes' },
    { name: 'link', type: 'string', label: 'link' },
    { name: 'ndaProtected', type: 'boolean', label: 'ndaProtected' },
    { name: 'relevantSkillTags', type: 'string', label: 'relevantSkillTags' },
  ],
};

export const ratecardType: MinionType = {
  id: 'profile-rate-card',
  name: 'Rate card',
  slug: 'rate-card',
  description: 'Platform-specific pricing for hourly and fixed-rate work.',
  icon: '💰',
  schema: [
    { name: 'platform', type: 'string', label: 'platform' },
    { name: 'hourlyMin', type: 'number', label: 'hourlyMin' },
    { name: 'hourlyMax', type: 'number', label: 'hourlyMax' },
    { name: 'fixedProjectMin', type: 'number', label: 'fixedProjectMin' },
    { name: 'currency', type: 'string', label: 'currency' },
  ],
};

export const skillclaimType: MinionType = {
  id: 'profile-skill-claim',
  name: 'Skill claim',
  slug: 'skill-claim',
  description: 'A specific technical or soft skill with a self-assessed proficiency level.',
  icon: '🧠',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'category', type: 'string', label: 'category' },
    { name: 'proficiency', type: 'select', label: 'proficiency' },
    { name: 'yearsOfExperience', type: 'number', label: 'yearsOfExperience' },
    { name: 'lastUsedAt', type: 'string', label: 'lastUsedAt' },
    { name: 'evidenceIds', type: 'string', label: 'evidenceIds' },
  ],
};

export const availabilityType: MinionType = {
  id: 'profile-availability',
  name: 'Availability',
  slug: 'availability',
  description: 'Current availability windows and capacity for new work.',
  icon: '📅',
  schema: [
    { name: 'status', type: 'select', label: 'status' },
    { name: 'hoursPerWeek', type: 'number', label: 'hoursPerWeek' },
    { name: 'earliestStartDate', type: 'string', label: 'earliestStartDate' },
    { name: 'timezone', type: 'string', label: 'timezone' },
    { name: 'preferredEngagementType', type: 'select', label: 'preferredEngagementType' },
    { name: 'notes', type: 'string', label: 'notes' },
  ],
};

export const customTypes: MinionType[] = [
  bioclaimType,
  portfolioitemType,
  ratecardType,
  skillclaimType,
  availabilityType,
];

