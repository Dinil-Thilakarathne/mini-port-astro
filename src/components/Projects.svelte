<script lang="ts">
  import { projectData } from '../constants/data';
</script>

<div class="content-container">
  <h1 class="header-1">#Things I’ve Built</h1>
  <div class=" flex flex-col space-y-4 py-2">
    {#each projectData as project (project.title)}
      <div class="project-card">
        <h2 class="font-semibold">
          {#if project.link}
            <a href={project.link} target="_blank">
              {project.title}:
            </a>
          {:else}
            {project.title}:
          {/if}
          <span class=" font-normal">
            {project.description}
          </span>
        </h2>
        <ul class=" list-disc pl-4">
            {#each project.itemList as item (item)}
                <li>
                    {item}
                </li>
            {/each}
        </ul>
      </div>
    {/each}
  </div>
</div>
