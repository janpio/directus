import { Field } from '@directus/types';
import { useI18n } from 'vue-i18n';

export const useUserFields = function (): Field[] {
	const { t } = useI18n();
	return [
		{
			collection: 'onboarding',
			name: t('fields.directus_users.first_name'),
			field: 'first_name',
			type: 'string',
			schema: {
				name: 'first_name',
				table: 'onboarding',
				schema: 'public',
				data_type: 'character varying',
				is_nullable: false,
				generation_expression: null,
				default_value: null,
				is_generated: false,
				max_length: 255,
				comment: null,
				numeric_precision: null,
				numeric_scale: null,
				is_unique: false,
				is_primary_key: false,
				has_auto_increment: false,
				foreign_key_schema: null,
				foreign_key_table: null,
				foreign_key_column: null,
			},
			meta: {
				id: 17,
				collection: 'onboarding',
				field: 'first_name',
				special: null,
				interface: 'input',
				options: { placeholder: t('fields.directus_users.first_name'), trim: true },
				display: null,
				display_options: null,
				readonly: false,
				hidden: false,
				sort: 2,
				width: 'half',
				translations: null,
				note: null,
				conditions: null,
				required: false,
				group: null,
				validation: null,
				validation_message: null,
			},
		},
		{
			collection: 'onboarding',
			name: t('fields.directus_users.last_name'),
			field: 'last_name',
			type: 'string',
			schema: {
				name: 'last_name',
				table: 'onboarding',
				schema: 'public',
				data_type: 'character varying',
				is_nullable: false,
				generation_expression: null,
				default_value: null,
				is_generated: false,
				max_length: 255,
				comment: null,
				numeric_precision: null,
				numeric_scale: null,
				is_unique: false,
				is_primary_key: false,
				has_auto_increment: false,
				foreign_key_schema: null,
				foreign_key_table: null,
				foreign_key_column: null,
			},
			meta: {
				id: 18,
				collection: 'onboarding',
				field: 'last_name',
				special: null,
				interface: 'input',
				options: { placeholder: t('fields.directus_users.last_name'), trim: true },
				display: null,
				display_options: null,
				readonly: false,
				hidden: false,
				sort: 3,
				width: 'half',
				translations: null,
				note: null,
				conditions: null,
				required: false,
				group: null,
				validation: null,
				validation_message: null,
			},
		},
		{
			collection: 'onboarding',
			name: t('fields.directus_users.email'),
			field: 'email',
			type: 'string',
			schema: {
				name: 'email',
				table: 'onboarding',
				schema: 'public',
				data_type: 'character varying',
				is_nullable: false,
				generation_expression: null,
				default_value: null,
				is_generated: false,
				max_length: 255,
				comment: null,
				numeric_precision: null,
				numeric_scale: null,
				is_unique: false,
				is_primary_key: false,
				has_auto_increment: false,
				foreign_key_schema: null,
				foreign_key_table: null,
				foreign_key_column: null,
			},
			meta: {
				id: 19,
				collection: 'onboarding',
				field: 'email',
				special: null,
				interface: 'input',
				options: { placeholder: t('fields.directus_users.email'), trim: true },
				display: null,
				display_options: null,
				readonly: false,
				hidden: false,
				sort: 4,
				width: 'half',
				translations: null,
				note: null,
				conditions: null,
				required: false,
				group: null,
				validation: { _and: [{ email: { _regex: '.+@.+\\..+' } }] },
				validation_message: "t('validationError.email')",
			},
		},
		{
			collection: 'onboarding',
			name: t('onboarding.user.mailinglist_name'),
			field: 'wants_emails',
			type: 'boolean',
			schema: {
				name: 'wants_emails',
				table: 'onboarding',
				schema: 'public',
				data_type: 'boolean',
				is_nullable: false,
				generation_expression: null,
				default_value: false,
				is_generated: false,
				max_length: null,
				comment: null,
				numeric_precision: null,
				numeric_scale: null,
				is_unique: false,
				is_primary_key: false,
				has_auto_increment: false,
				foreign_key_schema: null,
				foreign_key_table: null,
				foreign_key_column: null,
			},
			meta: {
				id: 20,
				collection: 'onboarding',
				field: 'wants_emails',
				special: ['cast-boolean'],
				interface: 'boolean',
				options: {
					label: t('onboarding.user.mailinglist_label'),
				},
				display: null,
				display_options: null,
				readonly: false,
				hidden: false,
				sort: 5,
				width: 'half',
				translations: null,
				note: t('onboarding.privacy_note'),
				conditions: null,
				required: false,
				group: null,
				validation: null,
				validation_message: null,
			},
		},
		{
			collection: 'onboarding',
			name: t('onboarding.user.primary_skillset'),
			field: 'primary_skillset',
			type: 'string',
			schema: {
				name: 'primary_skillset',
				table: 'onboarding',
				schema: 'public',
				data_type: 'character varying',
				is_nullable: true,
				generation_expression: null,
				default_value: null,
				is_generated: false,
				max_length: 255,
				comment: null,
				numeric_precision: null,
				numeric_scale: null,
				is_unique: false,
				is_primary_key: false,
				has_auto_increment: false,
				foreign_key_schema: null,
				foreign_key_table: null,
				foreign_key_column: null,
			},
			meta: {
				id: 25,
				collection: 'onboarding',
				field: 'primary_skillset',
				special: null,
				interface: 'select-radio',
				options: {
					choices: [
						{ text: t('onboarding.user.frontend'), value: 'frontend' },
						{ text: t('onboarding.user.backend'), value: 'backend' },
						{ text: t('onboarding.user.fullstack'), value: 'fullstack' },
						{ text: t('onboarding.user.db_admin'), value: 'db_admin' },
						{ text: t('onboarding.user.data_scientist'), value: 'data_scientist' },
						{ text: t('onboarding.user.nontechnical'), value: 'non_technical' },
					],
				},
				display: null,
				display_options: null,
				readonly: false,
				hidden: false,
				sort: 6,
				width: 'full',
				translations: null,
				note: null,
				conditions: null,
				required: false,
				group: null,
				validation: null,
				validation_message: null,
			},
		},
	];
};
