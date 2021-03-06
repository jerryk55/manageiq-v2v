import Immutable from 'seamless-immutable';

export const sourceClusters = Immutable({
  name: 'clusters',
  count: 5,
  subcount: 1,
  subquery_count: 1,
  pages: 1,
  resources: [
    {
      href: 'http://localhost:3000/api/clusters/10000000000001',
      id: '1',
      name: 'VMWare Cluster1',
      ems_id: '10000000000012',
      created_on: '2016-07-15T18:28:16Z',
      updated_on: '2016-07-15T18:28:16Z',
      uid_ems: '00000002-0002-0002-0002-00000000024b',
      ha_enabled: null,
      ha_admit_control: null,
      ha_max_failures: null,
      drs_enabled: null,
      drs_automation_level: null,
      drs_migration_threshold: null,
      last_perf_capture_on: null,
      ems_ref_obj: '/api/clusters/00000002-0002-0002-0002-00000000024b',
      effective_cpu: null,
      effective_memory: null,
      ems_ref: '/api/clusters/00000002-0002-0002-0002-00000000024b',
      type: null,
      ext_management_system: { emstype: 'vmwarews' },
      v_parent_datacenter: 'Datacenter'
    },
    {
      href: 'http://localhost:3000/api/clusters/10000000000002',
      id: '2',
      name: 'VMWare Cluster2',
      ems_id: '10000000000012',
      created_on: '2016-07-15T18:28:16Z',
      updated_on: '2016-07-15T18:28:16Z',
      uid_ems: '00000002-0002-0002-0002-00000000024b',
      ha_enabled: null,
      ha_admit_control: null,
      ha_max_failures: null,
      drs_enabled: null,
      drs_automation_level: null,
      drs_migration_threshold: null,
      last_perf_capture_on: null,
      ems_ref_obj: '/api/clusters/00000002-0002-0002-0002-00000000024b',
      effective_cpu: null,
      effective_memory: null,
      ems_ref: '/api/clusters/00000002-0002-0002-0002-00000000024b',
      type: null,
      ext_management_system: { emstype: 'vmwarews' },
      v_parent_datacenter: 'Datacenter'
    },
    {
      href: 'http://localhost:3000/api/clusters/10000000000003',
      id: '3',
      name: 'VMWare Cluster3',
      ems_id: '10000000000012',
      created_on: '2016-07-15T18:28:16Z',
      updated_on: '2016-07-15T18:28:16Z',
      uid_ems: '00000002-0002-0002-0002-00000000024b',
      ha_enabled: null,
      ha_admit_control: null,
      ha_max_failures: null,
      drs_enabled: null,
      drs_automation_level: null,
      drs_migration_threshold: null,
      last_perf_capture_on: null,
      ems_ref_obj: '/api/clusters/00000002-0002-0002-0002-00000000024b',
      effective_cpu: null,
      effective_memory: null,
      ems_ref: '/api/clusters/00000002-0002-0002-0002-00000000024b',
      type: null,
      ext_management_system: { emstype: 'vmwarews' },
      v_parent_datacenter: 'Datacenter'
    }
  ]
});

export const targetClusters = Immutable({
  name: 'clusters',
  count: 5,
  subcount: 2,
  subquery_count: 2,
  pages: 1,
  resources: [
    {
      href: 'http://localhost:3000/api/clusters/10000000000006',
      id: '1',
      name: 'RHV Cluster1',
      ems_id: '10000000000007',
      created_on: '2016-08-03T02:19:35Z',
      updated_on: '2017-02-26T02:33:43Z',
      uid_ems: 'domain-c7',
      ha_enabled: false,
      ha_admit_control: true,
      ha_max_failures: 1,
      drs_enabled: false,
      drs_automation_level: 'fullyAutomated',
      drs_migration_threshold: 3,
      last_perf_capture_on: null,
      ems_ref_obj: 'domain-c7',
      effective_cpu: 109356,
      effective_memory: 789977235456,
      ems_ref: 'domain-c7',
      type: null,
      ext_management_system: { emstype: 'rhevm' },
      v_parent_datacenter: 'Default'
    },
    {
      href: 'http://localhost:3000/api/clusters/10000000000007',
      id: '2',
      name: 'RHV Cluster2',
      ems_id: '10000000000008',
      created_on: '2016-08-03T02:19:35Z',
      updated_on: '2017-02-26T02:33:43Z',
      uid_ems: 'domain-c7',
      ha_enabled: false,
      ha_admit_control: true,
      ha_max_failures: 1,
      drs_enabled: false,
      drs_automation_level: 'fullyAutomated',
      drs_migration_threshold: 3,
      last_perf_capture_on: null,
      ems_ref_obj: 'domain-c7',
      effective_cpu: 109356,
      effective_memory: 789977235456,
      ems_ref: 'domain-c7',
      type: null,
      ext_management_system: { emstype: 'rhevm' },
      v_parent_datacenter: 'Default'
    }
  ]
});

export const cloudTenants = Immutable({
  resources: [
    {
      href: 'http://0.0.0.0:8080/api/cloud_tenants/42000000000003',
      id: '42000000000003',
      name: 'HR Intranet',
      description: '',
      enabled: true,
      ems_ref: '39f6ca6e7cdd40278d67394d8144c2e7',
      ems_id: '42000000000004',
      created_at: '2018-11-06T04:05:55Z',
      updated_at: '2018-11-06T04:05:55Z',
      type: 'ManageIQ::Providers::Openstack::CloudManager::CloudTenant',
      parent_id: null,
      ext_management_system: {
        id: '42000000000004',
        name: 'Brilliant OpenStack',
        created_on: '2018-11-06T02:03:55Z',
        updated_on: '2018-11-09T21:33:18Z',
        guid: 'e8dda556-c667-42fa-80ea-5b5d4bda02de',
        zone_id: '42000000000001',
        type: 'ManageIQ::Providers::Openstack::CloudManager',
        api_version: 'v3',
        uid_ems: 'default',
        host_default_vnc_port_start: null,
        host_default_vnc_port_end: null,
        provider_region: 'regionOne',
        last_refresh_error: null,
        last_refresh_date: '2018-11-09T21:33:18Z',
        provider_id: null,
        realm: null,
        tenant_id: '42000000000001',
        project: null,
        parent_ems_id: null,
        subscription: null,
        last_metrics_error: null,
        last_metrics_update_date: null,
        last_metrics_success_date: null,
        tenant_mapping_enabled: false,
        enabled: true,
        options: {},
        zone_before_pause_id: null
      }
    },
    {
      href: 'http://0.0.0.0:8080/api/cloud_tenants/42000000000002',
      id: '42000000000002',
      name: 'admin',
      description: 'admin tenant',
      enabled: true,
      ems_ref: '641a64a1a42d429f9606b345f328d306',
      ems_id: '42000000000004',
      created_at: '2018-11-06T02:04:54Z',
      updated_at: '2018-11-06T02:04:54Z',
      type: 'ManageIQ::Providers::Openstack::CloudManager::CloudTenant',
      parent_id: null,
      ext_management_system: {
        id: '42000000000004',
        name: 'Brilliant OpenStack',
        created_on: '2018-11-06T02:03:55Z',
        updated_on: '2018-11-09T21:33:18Z',
        guid: 'e8dda556-c667-42fa-80ea-5b5d4bda02de',
        zone_id: '42000000000001',
        type: 'ManageIQ::Providers::Openstack::CloudManager',
        api_version: 'v3',
        uid_ems: 'default',
        host_default_vnc_port_start: null,
        host_default_vnc_port_end: null,
        provider_region: 'regionOne',
        last_refresh_error: null,
        last_refresh_date: '2018-11-09T21:33:18Z',
        provider_id: null,
        realm: null,
        tenant_id: '42000000000001',
        project: null,
        parent_ems_id: null,
        subscription: null,
        last_metrics_error: null,
        last_metrics_update_date: null,
        last_metrics_success_date: null,
        tenant_mapping_enabled: false,
        enabled: true,
        options: {},
        zone_before_pause_id: null
      }
    }
  ]
});

export const requestSourceClustersData = {
  method: 'GET',
  fetchSourceClustersUrl: '/api/dummyProviders',
  response: { data: sourceClusters }
};

export const requestTargetClustersData = {
  method: 'GET',
  fetchTargetClustersUrl: '/api/dummyProviders',
  response: { data: targetClusters }
};

export const initialState = Immutable({
  sourceClusters: [],
  targetClusters: [],
  fetchSourceClustersUrl: requestSourceClustersData.fetchSourceClustersUrl,
  fetchTargetComputeUrls: {
    rhevm: '/api/dummy',
    openstack: '/api/dummy'
  }
});
