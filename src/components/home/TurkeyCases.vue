<script type="text/javascript">
  export default{
    props: {
      cases: {
        required: true
      }
    }
  }
</script>

<template>
	<section class="turkey-cases">
        <div class="total-case">
          <h1>{{ cases.total_cases }}</h1>
          <p>Toplam Vaka</p>
        </div>
        <div class="case-infos">
          <div class="case-card">
            <h2>{{ cases.total_recovered != '' ? cases.total_recovered : 0 }}</h2>
            <p>İyileşenler</p>
          </div>
          <div class="case-card">
            <h2>{{ cases.total_deaths }}</h2>
            <p>Ölümler</p>
          </div>
          <div class="case-card">
            <h2>{{ cases.new_cases != '' ? cases.new_cases : 0 }}</h2>
            <p>Yeni Vakalar</p>
          </div>
        </div>
      </section>
</template>

<style type="text/css">
	.turkey-cases{
  padding-top: var(--default-top);
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  column-gap: .9em;
}

.total-case{
  background-color: var(--card-color);
  min-height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: .9em;
  color: white;
}

.total-case h1{
  font-size: 5em;
}

.total-case p{
  font-size: 2em;
}

.case-infos{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.case-infos .case-card{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: var(--card-color);
  min-height: 15vh;
  padding: .9em;
  color: white;
}

.case-card h2{
  font-size: 2.5em;
}


</style>